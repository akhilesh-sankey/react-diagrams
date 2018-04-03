import * as React from "react";
import { DefaultLinkWidget } from "../widgets/DefaultLinkWidget";
import { DiagramEngine } from "../../DiagramEngine";
import { AbstractLinkFactory } from "../../factories/AbstractLinkFactory";
import { DefaultLinkModel } from "../models/DefaultLinkModel";
import { Toolkit } from "../../main";

/**
 * @author Dylan Vorster
 */
export class DefaultLinkFactory extends AbstractLinkFactory<DefaultLinkModel> {
	constructor() {
		super("default");
	}

	generateReactWidget(diagramEngine: DiagramEngine, link: DefaultLinkModel): JSX.Element {
		return React.createElement(DefaultLinkWidget, {
			link: link,
			diagramEngine: diagramEngine
		});
	}

	getNewInstance(initialConfig?: any): DefaultLinkModel {
		return new DefaultLinkModel();
	}

	generateLinkSegment(model: DefaultLinkModel, widget: DefaultLinkWidget, selected: boolean, path: string) {
		const markerId = Toolkit.UID();
		const markerEndUrl = "url(#"+markerId+")";
		return (
			// <path
			// 	className={selected ? widget.bem("--path-selected") : ""}
			// 	strokeWidth={model.width}
			// 	stroke={model.color}
			// 	d={path}
			// />
			<g>
				<defs>
					<marker id={markerId} markerWidth="8" markerHeight="8" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
						<path d="M0,0 L0,6 L3.5,3 z" className={selected ? widget.bem("--marker-selected"):widget.bem("-marker")}/>
					</marker>
				</defs>

				<path
					className={selected ? widget.bem("--path-selected") : ""}
					fill= "none"
					strokeWidth={model.width}
					stroke={model.color}
					d={path}
					markerEnd={markerEndUrl}
				/>
			</g>
		);
	}
}
