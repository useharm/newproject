import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {type BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__IS_DEV__: JSON.stringify(isDev),
		}),
	];
	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin(), new webpack.HotModuleReplacementPlugin());
	}

	return plugins;
}
