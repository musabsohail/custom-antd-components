import React from 'react';
import PropTypes from 'prop-types';
import { Upload } from 'antd';

import CustomCol from './CustomCol';
import CustomIcon from './CustomIcon';
import CustomRow from './CustomRow';
import CustomText from './CustomText';

const { Dragger } = Upload;

const CustomUploadArea = ({ fileUpload, accept }) => {
  return (
    <Dragger
      style={{ borderColor: '#30bda0' }}
      name="file"
      accept={accept}
      multiple={false}
      beforeUpload={(file) => {
        fileUpload(file);
        return false;
      }}
      onRemove={() => fileUpload({})}
    >
      <CustomRow style={{ padding: '20px 15px' }}>
        <CustomCol span={4} offset={4}>
          <CustomIcon
            style={{ fontSize: '3rem', color: '#30bda0' }}
            type="file"
          />
        </CustomCol>
        <CustomCol span={16} style={{ textAlign: 'left' }}>
          <CustomText
            style={{ color: '#30bda0', display: 'block' }}
            text="Upload .docx template"
            textStyle={{ strong: true }}
          />
          <CustomText
            style={{ display: 'block' }}
            text="Or, drag & drop here"
          />
        </CustomCol>
      </CustomRow>
    </Dragger>
  );
};

CustomUploadArea.defaultProps = {
  fileUpload: () => console.log('fileUpload func is Missing in Props'),
  accept: '',
};

CustomUploadArea.propTypes = {
  fileUpload: PropTypes.func,
  accept: PropTypes.string,
};

export default CustomUploadArea;
