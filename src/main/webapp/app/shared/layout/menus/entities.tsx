import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';
import { faSatellite, faHome } from '@fortawesome/free-solid-svg-icons';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entity Management" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon={faSatellite} to="/device">
      Device
    </MenuItem>
    <MenuItem icon={faHome} to="/room">
      Room
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
