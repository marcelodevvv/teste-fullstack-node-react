import {
	ReactElement,
	useEffect,
	useRef,
	useState,
	cloneElement,
	CSSProperties,
} from 'react';
import Stickyfill from 'stickyfill';
import supports from 'css-supports';

interface StickyProps {
	children: ReactElement;
	style?: CSSProperties;
}

let stickyfill;
if (typeof window !== 'undefined') {
	stickyfill = Stickyfill();
	supports.shim();
}

export function Sticky({ children, style }: StickyProps) {
	const [clientSide, setClientSide] = useState(false);
	const stickyElement = useRef(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setClientSide(true);
			try {
				if (stickyElement.current) {
					const stickyElementConst = stickyElement.current;
					stickyfill.add(stickyElementConst);
					return () => {
						stickyfill.remove(stickyElementConst);
					};
				}
			} catch (err) {
				console.error('failed to polyfill', err);
			}
		}
	}, []);

	function _getPositionStyleValue() {
		const isStickySupported = CSS.supports('position', 'sticky');
		return isStickySupported ? 'sticky' : '-webkit-sticky';
	}

	if (!clientSide) {
		return cloneElement(children, {
			ref: stickyElement,
		});
	}

	return cloneElement(children, {
		ref: stickyElement,
		style: {
			zIndex: 1,
			position: _getPositionStyleValue(),
			...style,
		},
	});
}
