import * as React from "react";
import { DefaultLinkWidget } from "../widgets/DefaultLinkWidget";
import { DiagramEngine } from "../../DiagramEngine";
import { AbstractLinkFactory } from "../../factories/AbstractLinkFactory";
import { DefaultLinkModel } from "../models/DefaultLinkModel";

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
		return (
			<g>
				<defs>
					<marker id="arrow" markerWidth="100" markerHeight="15" refX="10" refY="2.7" 
					orient="auto" markerUnits="strokeWidth" viewBox="0 0 20 20">
					<path d="M0,0 L0,6 L9,3 z" fill="#f00 !important" />
					</marker>
				</defs>
				<path
					className={selected ? widget.bem("--path-selected") : ""}
					fill= "none"
					strokeWidth={model.width}
					stroke={model.color}
					d={path}
					marker-end="url(#arrow)"
				/>	
			</g>
		);
	}
}
