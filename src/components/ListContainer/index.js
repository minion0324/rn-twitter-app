import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  HEIGHT,
  MAIN_PADDING,
} from 'src/constants';

const scrollContentContainerStyle = {
  paddingBottom: HEIGHT * 0.12,
};

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const ListContainer = ({
  children,
  onRefreshProcess,
}) => {
  const [ refreshing, setRefreshing ] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // onRefreshProcess && onRefreshProcess();
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <ScrollView
      contentContainerStyle={scrollContentContainerStyle}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {children}
    </ScrollView>
  );
}

ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onRefreshProcess: PropTypes.func,
};

ListContainer.defaultProps = {
  onRefreshProcess: null,
};

export default ListContainer;
