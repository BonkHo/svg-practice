import React from "react";

// Components
import BackGroundCircle from "./BackGroundCircle";
import Eye from "./Eye";
import Mouth from "./Mouth";
import FaceContainer from "./FaceContainer";

const Face = ({
	width,
	height,
	centerX,
	centerY,
	eyeOffSetY,
	eyeOffSetX,
	eyeRadius,
	mouthWidth,
	mouthRadius,
}) => {
	return (
		<div>
			<body>
				<FaceContainer
					width={width}
					height={height}
					centerX={centerX}
					centerY={centerY}
				>
					<BackGroundCircle radius={200} width={width} height={height} />
					<Eye cx={-eyeOffSetX} cy={-eyeOffSetY} eyeRadius={eyeRadius} />
					<Eye cx={+eyeOffSetX} cy={-eyeOffSetY} eyeRadius={eyeRadius} />
					<Mouth mouthWidth={mouthWidth} mouthRadius={mouthRadius} />
				</FaceContainer>
			</body>
		</div>
	);
};

export default Face;
