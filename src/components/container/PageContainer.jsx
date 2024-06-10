import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageContainer = ({ title, children, description}) => {
  return (
	<>
	  <Helmet>
		<title>{title}</title>
		<meta name="description" content={description} />
	  </Helmet>
	  {children}
	</>
  )
};
PageContainer.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.node,
  };

export default PageContainer
