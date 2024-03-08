import * as allBootstrapIcons from "react-icons/bs";
import * as allGithubOcticons from "react-icons/go";
import * as allFontAwesome from "react-icons/fa6";
import * as allFeatherIcons from "react-icons/fi";
import * as allIonicons5 from "react-icons/io5";
import * as allFlatColor from "react-icons/fc";
import * as allBoxIcons from "react-icons/bi";
import * as allMaterialDesignIcons from "react-icons/md";
import { IconType } from "react-icons";
import React from "react";

interface IconProps {
	package:
		| "feather"
		| "flatcolor"
		| "fontawesome6"
		| "githubocticonsicons"
		| "boxicons"
		| "ionicons5"
		| "bootstrapicons"
		| "materialdesignicons";
	name: string;
	size?: number;
	color?: string;
	className?: string;
	onClick?: () => void;
}

export const OdysseyIcon: React.FC<IconProps> = ({
	package: iconPackage,
	name,
	size = 24,
	color = "black",
	onClick,
}) => {
	let IconComponent: IconType | undefined;

	if (iconPackage === "feather") {
		IconComponent = allFeatherIcons[name as keyof typeof allFeatherIcons];
	} else if (iconPackage === "flatcolor") {
		IconComponent = allFlatColor[name as keyof typeof allFlatColor];
	} else if (iconPackage === "fontawesome6") {
		IconComponent = allFontAwesome[name as keyof typeof allFontAwesome];
	} else if (iconPackage === "githubocticonsicons") {
		IconComponent = allGithubOcticons[name as keyof typeof allGithubOcticons];
	} else if (iconPackage === "boxicons") {
		IconComponent = allBoxIcons[name as keyof typeof allBoxIcons];
	} else if (iconPackage === "materialdesignicons") {
		IconComponent =
			allMaterialDesignIcons[name as keyof typeof allMaterialDesignIcons];
	} else if (iconPackage === "bootstrapicons") {
		IconComponent = allBootstrapIcons[name as keyof typeof allBootstrapIcons];
	} else if (allIonicons5) {
		IconComponent = allIonicons5[name as keyof typeof allIonicons5];
	} else {
		return null;
	}

	if (!IconComponent) {
		return null;
	}

	return <IconComponent onClick={onClick} size={size} color={color} />;
};
