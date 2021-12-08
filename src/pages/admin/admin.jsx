// 管理的路由组件

import React, { Component } from "react";
import "./admin.less"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { FormattedMessage, useIntl, connect } from 'umi';
import logo from '../../img/logo_momenta_blue_h.svg';




  
const Login = (props) => {
  const { submitting, dispatch } = props;
  const { formatMessage } = useIntl();

  const handleSubmit = (values) => {
    dispatch({
      type: 'account/login',
      payload: { ...values },
    });
  };
        
    return (
      <div className={styles.main}>
        <img alt="Momenta" className={styles.logo} src={logo} />
        <hr className={styles.divider} />
        <span className={styles.title}>Simulation云平台</span>
        <ProForm
          submitter={{
            render: (_, dom) => dom.pop(),
            submitButtonProps: {
              loading: submitting,
              size: 'large',
              style: {
                width: '100%',
              },
            },
          }}
          onFinish={(values) => {
            handleSubmit(values);
            return Promise.resolve();
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder={formatMessage({
              id: 'pages.login.username',
            })}
            rules={[
              {
                required: true,
                message: <FormattedMessage id="pages.login.username.required" />,
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={styles.prefixIcon} />,
            }}
            placeholder={formatMessage({
              id: 'pages.login.password',
            })}
            rules={[
              {
                required: true,
                message: <FormattedMessage id="pages.login.password.required" />,
              },
            ]}
          />
        </ProForm>
      </div>
    );
  };
  export default connect(({ account }) => ({
    account,
  }))(Admin);