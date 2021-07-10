/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { Modal, Form, Input, Button, Upload, InputNumber, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as movieService from '../../../../service/movie.service';
import moment from 'moment';
import { message as toastr } from 'antd';
import { environment } from '../../../../../environments/environment';

export default class AddEditMovieModal extends Component {
	formRef = React.createRef();

	constructor(props) {
		super(props);
		this.state = {
			movie: {},
			loading: true,
		};

		this.handleOk = this.handleOk.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.movie !== this.props.movie) {
			this.setState({ movie: this.props.movie || {} });
		}
	}

	handleOk() {
		this.formRef.current.validateFields();
	}

	render() {
		const normFile = (e) => {
			console.log('Upload event:', e);
			if (Array.isArray(e)) {
				return e;
			}
			return e && e.fileList;
		};

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 7 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 17 },
			},
		};

		return (
			<Modal cancelText="Hủy" okText={!this.state.movie.id ? 'Tạo' : 'Lưu'} title={!this.state.movie.id ? 'Thêm phim' : 'Sửa phim'} visible={this.props.visible} onOk={this.handleOk} onCancel={this.props.onCloseModal}>
				<Form ref={this.formRef} onFinish={this.onFinish} {...formItemLayout}>
					<Form.Item
						name="name"
						label="Tên phim"
						rules={[
							{
								required: true,
								message: 'Vui lòng điền vào giá trị này',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="age"
						label="Độ tuổi"
						rules={[
							{
								required: true,
								message: 'Vui lòng điền vào giá trị này',
							},
						]}
					>
						<InputNumber style={{ width: '50%' }} />
					</Form.Item>
					<Form.Item
						name="duration"
						label="Thời lượng"
						rules={[
							{
								required: true,
								message: 'Vui lòng điền vào giá trị này',
							},
						]}
					>
						<InputNumber min={1} max={200} style={{ width: '50%' }} />
					</Form.Item>
					<Form.Item
						name="publishAt"
						label="Ngày phát hành"
						rules={[
							{
								required: true,
								message: 'Vui lòng điền vào giá trị này',
							},
						]}
					>
						<DatePicker style={{ width: '50%' }} />
					</Form.Item>
					<Form.Item
						name="posterUrl"
						label="Poster"
						valuePropName="fileList"
						getValueFromEvent={normFile}
						rules={[
							{
								required: true,
								message: 'Vui lòng điền vào giá trị này',
							},
						]}
					>
						<Upload name="poster" action={environment.BaseURL + '/files/posters'} accept="image/*" listType="picture">
							<Button icon={<UploadOutlined />}>Click to upload</Button>
						</Upload>
					</Form.Item>
				</Form>
			</Modal>
		);
	}
}
