import React, {Suspense, type ErrorInfo} from 'react';
import {type ReactNode} from 'react';
import {PageError} from 'widgets/PageError';

type ErrorBoundaryProps = {
	children: ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return {hasError: true};
	}

	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {hasError: false};
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		console.log(error, info.componentStack);
	}

	render() {
		const {hasError} = this.state;
		const {children} = this.props;
		if (hasError) {
			// You can render any custom fallback UI
			return <Suspense fallback=''><PageError /></Suspense>;
		}

		return children;
	}
}

export default ErrorBoundary;
