package com.genial.iot.config;

/**
 * Application constants.
 */
public final class Constants {

    // Regex for acceptable logins
    public static final String LOGIN_REGEX = "^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$";

    public static final String SYSTEM = "system";
    public static final String DEFAULT_LANGUAGE = "en";

    public static final Double EU_WINTER_TEMP_MIN_STANDARD = 20.0;
    public static final Double EU_WINTER_TEMP_MAX_STANDARD = 24.0;

    public static final Double EU_SUMMER_TEMP_MIN_STANDARD = 24.0;
    public static final Double EU_SUMMER_TEMP_MAX_STANDARD = 27.0;

    public static final Integer EU_HUMIDITY_MIN_STANDARD = 30;
    public static final Integer EU_HUMIDITY_MAX_STANDARD = 60;

    public static final Integer EU_LIGHT_MIN_STANDARD = 300;
    public static final Integer EU_LIGHT_MAX_STANDARD = 500;

    public static final Integer EU_NOISE_AVG_STANDARD = 40;

    private Constants() {}
}
