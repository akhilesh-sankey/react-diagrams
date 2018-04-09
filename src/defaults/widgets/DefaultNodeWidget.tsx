import * as React from "react";
import * as _ from "lodash";
import { DefaultNodeModel } from "../models/DefaultNodeModel";
import { DefaultPortLabel } from "./DefaultPortLabelWidget";
import { DiagramEngine } from "../../DiagramEngine";
import { BaseWidget, BaseWidgetProps } from "../../widgets/BaseWidget";

export interface DefaultNodeProps extends BaseWidgetProps {
	node: DefaultNodeModel;
	diagramEngine: DiagramEngine;
}

export interface DefaultNodeState {}

/**
 * @author Dylan Vorster
 */
export class DefaultNodeWidget extends BaseWidget<DefaultNodeProps, DefaultNodeState> {
	constructor(props: DefaultNodeProps) {
		super("srd-default-node", props);
		this.state = {};
	}

	generatePort(port) {
		return <DefaultPortLabel model={port} key={port.id} />;
	}

	getClassName() {
		return "node " + super.getClassName() + (this.props.node.isSelected() ? this.bem("--selected") : "");
	}

	render() {
		return (
			// <div {...this.getProps()} style={{ background: this.props.node.color }}>
			// 	<div className={this.bem("__title")}>
			// 		<div className={this.bem("__name")}>{this.props.node.name}</div>
			// 	</div>
			// 	<div className={this.bem("__ports")}>
			// 		<div className={this.bem("__in")}>
			// 			{_.map(this.props.node.getInPorts(), this.generatePort.bind(this))}
			// 		</div>
			// 		<div className={this.bem("__out")}>
			// 			{_.map(this.props.node.getOutPorts(), this.generatePort.bind(this))}
			// 		</div>
			// 	</div>
			// </div>'
			<div id={this.props.node.id} {...this.getProps()} >
			<div  className={this.bem("__ports")}>
				<div className={this.bem("__in")}>
					{_.map(this.props.node.getInPorts(), this.generatePort.bind(this))}
				</div>
			</div>
			<div {...this.getProps()} style={{ background: this.props.node.color }}>
				<div className={this.bem("__title")}>
					<div className={this.bem("__img")} style={{ background: this.props.node.bgImage}}  ></div>
					<div className={this.bem("__name")}>{this.props.node.name}</div>
				</div>
			</div>
			<div className={this.bem("__ports")}>
				<div {...this.getProps()} className={this.bem("__out")}>
					{_.map(this.props.node.getOutPorts(), this.generatePort.bind(this))}
				</div>
			</div>
		</div>
		);
	}
}
