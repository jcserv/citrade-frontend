import { Box, Heading, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { Card } from '../components/Card';
import { LoginForm } from '../components/LoginForm';
import Navbar from '../components/NavBar/index';

function Login() {
	return (
		<Flex direction="column" bg="gray.100" height="100vh">
			<Navbar />
			<Box maxW="md" mx="auto">
				<Heading textAlign="center" size="xl" fontWeight="extrabold" pt="50px">
					Sign in to your account
				</Heading>
				<Card p="4" mt="40px">
					<LoginForm />
					<Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
					<Text as="span">Don&apos;t have an account?</Text>
					<Link href="/register"> Register now</Link>
				</Text>
				</Card>
			</Box>
		</Flex>
	);
}

export default Login;
