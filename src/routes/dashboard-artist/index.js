/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import DashboardArtist from './dashboard-artist';

export const path = '/dashboard-artist';
export const action = async (state) => {
  const title = 'Dashboard-artist Us';
  state.context.onSetTitle(title);
  return <DashboardArtist title={title} />;
};
