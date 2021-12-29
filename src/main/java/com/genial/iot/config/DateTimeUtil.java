package com.genial.iot.config;

import java.time.LocalDate;
import lombok.experimental.UtilityClass;

@UtilityClass
public class DateTimeUtil {

    public static boolean isSummerTimeInEurope() {
        int currentMonth = LocalDate.now().getMonth().getValue();
        switch (currentMonth) {
            case 11:
            case 12:
            case 1:
            case 2:
            case 3:
                return false;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                return true;
        }
        return false;
    }
}
