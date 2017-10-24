import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
} from '../..';

export const EuiHeaderAlert = ({
  action,
  className,
  date,
  text,
  title,
  ...rest,
}) => {
  const classes = classNames('euiHeaderAlert', className);

  return (
    <div
      className={classes}
      {...rest}
    >
      <EuiButtonIcon iconType="cross" size="small" className="euiHeaderAlert__dismiss" />
      <p className="euiHeaderAlert__title">{title}</p>
      <p className="euiHeaderAlert__text">{text}</p>
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem grow={false}>
          <div className="euiHeaderAlert__action euiLink">{action}</div>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <div className="euiHeaderAlert__date">
            {date}
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

EuiHeaderAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
};