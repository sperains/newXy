
import React , {Component} from 'react';
import './IdentityEditForm.scss';
import {Select ,Input } from 'antd';
const Option = Select.Option;

export default class IdentityEditForm extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="identity-edit-form">
				<div className="identity-edit-form-item">
					<div className="identity-edit-form-item-label">职级类别<span></span></div>
					<div className="identity-edit-form-item-content">
						<Select defaultValue="lucy" style={{ width: 540 }} >
						      <Option value="jack">Jack</Option>
						      <Option value="lucy">Lucy</Option>
						      <Option value="disabled" disabled>Disabled</Option>
						      <Option value="Yiminghe">yiminghe</Option>
					    </Select>
					</div>
				</div>
				<div className="identity-edit-form-item">
					<div className="identity-edit-form-item-label">登录账号<span></span></div>
					<div className="identity-edit-form-item-content">
						<Input />
					</div>
				</div>
				<div className="identity-edit-form-item">
					<div className="identity-edit-form-item-label">登录密码<span></span></div>
					<div className="identity-edit-form-item-content">
						<Input />
					</div>
				</div>
				<div className="identity-edit-form-item">
					<div className="identity-edit-form-item-label">联系电话<span></span></div>
					<div className="identity-edit-form-item-content">
						<Input />
					</div>
				</div>
				<div className="identity-edit-form-item">
					<div className="identity-edit-form-item-label">开启微信验证<span></span></div>
					<div className="identity-edit-form-item-content">
						<Input />
					</div>
				</div>
				<div className="identity-edit-form-item identity-edit-form-item-auto">
					<div className="identity-edit-form-item-label">权限模块<span></span></div>
					<div className="identity-edit-form-item-content identity-edit-form-item-module-wrap">
						<div className="identity-edit-form-item-content-module">
								<div className="identity-edit-form-item-content-module-checkbox"></div>
								<span className="identity-edit-form-item-content-module-name">正念训练</span>
								<Select defaultValue="1" style={{ width: 410 }} >
								      <Option value="1">可编辑</Option>
								       <Option value="2">仅查看</Option>
							      </Select>
						</div>
						<div className="identity-edit-form-item-content-module">
								<div className="identity-edit-form-item-content-module-checkbox"></div>
								<span className="identity-edit-form-item-content-module-name">线下活动</span>
								<Select defaultValue="1" style={{ width: 410 }} >
								      <Option value="1">可编辑</Option>
								       <Option value="2">仅查看</Option>
							      </Select>
						</div>
						<div className="identity-edit-form-item-content-module">
								<div className="identity-edit-form-item-content-module-checkbox"></div>
								<span className="identity-edit-form-item-content-module-name">正念训练</span>
								<Select defaultValue="1" style={{ width: 410 }} >
								      <Option value="1">可编辑</Option>
								       <Option value="2">仅查看</Option>
							      </Select>
						</div>
						<div className="identity-edit-form-item-content-module">
								<div className="identity-edit-form-item-content-module-checkbox"></div>
								<span className="identity-edit-form-item-content-module-name">正念训练</span>
								<Select defaultValue="1" style={{ width: 410 }} >
								      <Option value="1">可编辑</Option>
								       <Option value="2">仅查看</Option>
							      </Select>
						</div>
					</div>
				</div>
			</div>
		)
	}
}