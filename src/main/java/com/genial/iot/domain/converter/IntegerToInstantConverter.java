package com.genial.iot.domain.converter;

import java.time.Instant;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.ReadingConverter;

@ReadingConverter
public class IntegerToInstantConverter implements Converter<Integer, Instant> {

    @Override
    public Instant convert(Integer source) {
        return Instant.ofEpochSecond(source);
    }
}
