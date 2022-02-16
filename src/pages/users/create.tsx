import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6, 'NO mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem'),
})

export default function CreateUser() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    //console.log(values)
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
          <SimpleGrid 
              minChildWidth='240px'
              spacing={['6', '8']}
              w='100%'
            >
              <Input 
                name="label" 
                label="Nome completo" 
                error={formState.errors.name}
                {...register('Name')}
              />
              <Input 
                name="email" 
                type="email" 
                error={formState.errors.email}
                label="E-mail" 
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid 
              minChildWidth='240px'
              spacing={['6', '8']}
              w='100%'
            >
              <Input 
                name="password" 
                type="password" 
                error={formState.errors.passwrord}
                label="Senha" 
                {...register('password')} 
              />
              <Input 
                name="password_confirmation" 
                type="password" 
                error={formState.errors.password_confirmation}
                label="Confirmação da senha" 
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}