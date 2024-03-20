import React, { PropsWithChildren } from "react";

interface IBaseLayoutHomePageProps extends PropsWithChildren { }

export const BaseLayoutHomePage: React.FC<IBaseLayoutHomePageProps> = ({
	children,
}) => {
	return <div>{children}</div>;
};
