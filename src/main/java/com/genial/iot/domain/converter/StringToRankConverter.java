package com.genial.iot.domain.converter;

import static com.genial.iot.domain.RoomGrade.Rank;

import java.util.Arrays;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.ReadingConverter;

@ReadingConverter
public class StringToRankConverter implements Converter<String, Rank> {

    @Override
    public Rank convert(String source) {
        return Arrays.stream(Rank.values()).filter(e -> e.getGradeValue().equals(source)).findAny().orElse(Rank.NA);
    }
}
