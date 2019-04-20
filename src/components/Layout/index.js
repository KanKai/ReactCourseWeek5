import React from "react";
import { Redirect } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import {token} from 'helpers/util'
import './styles.scss';

function Layout({ children }) {
  if(!token.hasToken()) {
    return <Redirect to="/" />
  }
  return (
    <AntdLayout className="layoutWrapper">
      <AntdLayout.Content className="content">
        {children}
      </AntdLayout.Content>
    </AntdLayout>
  );
}

export default Layout;
