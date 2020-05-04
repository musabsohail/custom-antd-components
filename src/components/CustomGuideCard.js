import React from 'react';
import PropTypes from 'prop-types';

import CustomCard from './CustomCard';
import CustomCol from './CustomCol';
import CustomIcon from './CustomIcon';
import CustomRow from './CustomRow';
import CustomText from './CustomText';

const rowBreak = { marginTop: '12px' };

const CustomGuideCard = ({ title, text }) => {
  return (
    <CustomCard
      style={{
        marginTop: '18px',
        maxWidth: '560px',
        backgroundColor: '#f8f8fa',
        border: '#ECECF1 solid 1 px',
        borderRadius: '8px',
      }}
    >
      <CustomRow>
        <CustomCol span={2}>
          <CustomIcon type="info-circle" />
        </CustomCol>
        <CustomCol span={22}>
          <CustomRow>
            <CustomText text={title} textStyle={{ strong: true }} />
          </CustomRow>
          <CustomRow style={{ ...rowBreak }}>
            <CustomText text={text} />
          </CustomRow>
        </CustomCol>
      </CustomRow>
    </CustomCard>
  );
};

CustomGuideCard.defaultProps = {
  title: '',
  text: '',
};
CustomGuideCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default CustomGuideCard;
