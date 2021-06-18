import { Box, HStack } from '@chakra-ui/react';
import * as React from 'react';

const DesktopNavItem = (props) => {
	const { icon, label, href = '#', active } = props;
	return (
		<HStack
			as="a"
			href={href}
			aria-current={active ? 'page' : undefined}
			spacing="2"
			px="3"
			py="2"
			rounded="md"
			transition="all 0.2s"
			color="gray.200"
			_hover={{
				color: 'blue.400'
			}}
			_activeLink={{
				bg: 'blackAlpha.300',
				color: 'white'
			}}
		>
			{icon && (
				<Box aria-hidden fontSize="md">
					{icon}
				</Box>
			)}
			<Box fontWeight="semibold">{label}</Box>
		</HStack>
	);
};

const MobileNavItem = (props) => {
	const { label, href = '#', active } = props;
	return (
		<Box
			as="a"
			display="block"
			href={href}
			px="3"
			py="3"
			rounded="md"
			fontWeight="semibold"
			aria-current={active ? 'page' : undefined}
			_activeLink={{
				bg: 'blackAlpha.300',
				color: 'white'
			}}
		>
			{label}
		</Box>
	);
};

export const NavItem = {
	Desktop: DesktopNavItem,
	Mobile: MobileNavItem
};
