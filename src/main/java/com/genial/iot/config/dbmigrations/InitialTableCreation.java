package com.genial.iot.config.dbmigrations;

import com.genial.iot.config.Constants;
import com.genial.iot.domain.*;
import com.github.cloudyrock.mongock.ChangeLog;
import com.github.cloudyrock.mongock.ChangeSet;
import com.github.cloudyrock.mongock.driver.mongodb.springdata.v3.decorator.impl.MongockTemplate;
import java.time.Instant;

/**
 * Creates the initial database setup.
 */
@ChangeLog(order = "002")
public class InitialTableCreation {

    @ChangeSet(order = "01", author = "initiator", id = "01-addDevices")
    public void addDevices(MongockTemplate mongoTemplate) {
        Device device = new Device();
        device.setName("Button");
        device.setProducer("Groove");
        device.setVersion("v1.2");
        device.setType(Device.Type.OTHERS);
        device.setCreatedBy(Constants.SYSTEM);
        device.setCreatedDate(Instant.now());
        mongoTemplate.save(device);
    }
}
