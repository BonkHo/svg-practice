import React from "react";

// Components
import BackGroundCircle from "./BackGroundCircle";
import Eyes from "./Eyes";
import Mouth from "./Mouth";
import FaceContainer from "./FaceContainer";

const Face = ({
	width,
	height,
	centerX,
	centerY,
	strokeWidth,
	eyeOffsetY,
	eyeOffsetX,
	eyeRadius,
	mouthWidth,
	mouthRadius,
}) => {
	return (
		<FaceContainer
			width={width}
			height={height}
			centerX={centerX}
			centerY={centerY}
		>
			<BackGroundCircle
				radius={centerY - strokeWidth / 2}
				strokeWidth={strokeWidth}
			/>
			<Eyes
				eyeOffsetX={eyeOffsetX}
				eyeOffsetY={eyeOffsetY}
				eyeRadius={eyeRadius}
			/>
			<Mouth
				mouthWidth={mouthWidth}
				mouthRadius={mouthRadius}
			/>
		</FaceContainer>
	);
};

export default Face;
