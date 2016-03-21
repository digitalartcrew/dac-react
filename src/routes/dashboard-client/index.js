/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import DashboardClient from './dashboard-client';

export const path = '/dashboard-client';
export const action = async (state) => {
  const title = 'Dashboard Client';
  state.context.onSetTitle(title);
  return <DashboardClient title={title} />;
};
