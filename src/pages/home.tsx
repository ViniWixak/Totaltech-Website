import {
  Image,
  Center,
  Box,
  SimpleGrid,
  Flex,
  Text,
  Button,
  Container,
  Grid,
  Heading,
  VStack,
  WrapItem,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import { Input } from '@/components/input';

const products = [
  {
    title: 'Manutenção Preventiva',
    subTitle:
      'Oferecemos serviços de manutenção programada e preventiva para garantir o bom funcionamento contínuo dos sistemas de climatização.',
    icon: 'heroicons:wrench-screwdriver',
  },
  {
    title: 'Manutenção Corretiva',
    subTitle:
      'Realizamos reparos e solucionamos problemas em sistemas de climatização de forma eficiente e rápida, minimizando o tempo de paralisação.',
    icon: 'ant-design:tool-outlined',
  },
  {
    title: 'Controle de Qualidade do Ar',
    subTitle:
      'Implementamos medidas para garantir a qualidade do ar nos ambientes climatizados, proporcionando ambientes saudáveis e confortáveis.',
    icon: 'ic:sharp-air',
  },
  {
    title: 'Montagem e Instalação de Sistemas e Dutos',
    subTitle:
      'Realizamos a montagem e instalação de sistemas completos de climatização, incluindo dutos, equipamentos e sistemas de distribuição.',
    icon: 'eos-icons:pipeline',
  },
  {
    title: 'Projetos',
    subTitle:
      'Desenvolvemos projetos personalizados de climatização de ambientes, levando em consideração as necessidades específicas de cada cliente e oferecendo soluções eficientes e econômicas.',
    icon: 'eos-icons:project-outlined',
  },
  {
    title: 'Consultoria',
    subTitle:
      'Prestamos serviços de consultoria especializada em climatização, auxiliando na seleção e dimensionamento adequado dos equipamentos, bem como no desenvolvimento de estratégias para otimização do consumo de energia.',
    icon: 'tabler:bulb',
  },
  {
    title: 'Automação',
    subTitle:
      'Implementamos sistemas de automação para controle e gerenciamento eficiente dos sistemas de climatização, proporcionando maior conforto e economia de energia.',
    icon: 'icon-park-twotone:robot-two',
  },
  {
    title: 'PMOC ',
    subTitle:
      'Elaboramos planos de manutenção personalizados, garantindo o correto funcionamento e a durabilidade dos sistemas de climatização, além de estarmos em conformidade com as normas e regulamentações aplicáveis.',
    icon: 'ph:file-text',
  },
];
const navMenu = [
  {
    subMenu: 'Serviços',
    section: 'sectionB',
  },
  {
    subMenu: 'Quem somos',
    section: 'sectionC',
  },
  {
    subMenu: 'Filosofia',
    section: 'sectionD',
  },
  {
    subMenu: 'Contato',
    section: 'sectionF',
  },
];
const images = ['assets/image3.jpg', 'assets/Image43.jpg', 'assets/image5.jpg'];
export default function Home() {
  const handleClick = () => {
    const phoneNumber = '5521991197332';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  const scrollToSectionB = () => {
    const sectionB = document.getElementById('sectionB');
    if (sectionB) {
      sectionB.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionSelected: string) => {
    const section = document.getElementById(sectionSelected);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MotionBox = motion(Box);
  return (
    <Layout>
      <Box
        w="100%"
        h="5.5rem"
        boxShadow="base"
        display="flex"
        alignItems="center"
        top={0}
        bg="#FFF"
        zIndex={2}
      >
        <Flex
          w="100%"
          display="flex"
          justifyContent="space-between"
          maxW="1200px"
          mx="auto"
          px={{ base: '10px', md: '40px' }}
        >
          <Image
            src="/assets/logo.png"
            width="200px"
            objectFit="contain"
            alt="logo"
          />
          <SimpleGrid columns={4} gap={4}>
            {navMenu.map((item, idx) => (
              <Center
                key={idx}
                minW="110px"
                borderBottom="2px solid #76A117"
                cursor="pointer"
                onClick={() => scrollToSection(item.section)}
              >
                <Text fontSize="16px" fontWeight="500">
                  {item.subMenu}
                </Text>
              </Center>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
      <Box paddingTop={['0px', '0px', '30px']} bg="#F3F3F3">
        <Box maxW="1200px" mx="auto" id="sectionA">
          <Flex
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            py={['40px', '40px', '30px']}
            px={['20px', '20px', '0px']}
            maxW="1200px"
            mx="auto"
          >
            <Box w={{ base: '100%', lg: '50%' }}>
              <Box maxW="500px">
                <Text paddingTop="20px" fontSize="48px" fontWeight="700">
                  TotalTech
                </Text>
                <Text mt="-10px" fontSize="28px" fontWeight="400">
                  Inovação em{' '}
                  <span style={{ color: '#1488B7' }}>Climatização</span>
                </Text>
                <Text paddingTop="20px" fontSize="22px" fontWeight="400">
                  Líder no mercado de climatização de ambientes. Fornecemos
                  soluções personalizadas em sistemas de HVAC-R - aquecimento,
                  ventilação, ar condicionado e refrigeração - para criar
                  ambientes que combinam{' '}
                  <strong style={{ color: '#76A117' }}>
                    eficiência energética, qualidade do ar e conforto
                    excepcionais.
                  </strong>
                </Text>
                <Box pt="40px">
                  <Button
                    w="350px"
                    h="45px"
                    mr="10px"
                    borderRadius="45px"
                    fontSize="22px"
                    fontWeight={400}
                    color="#FFF"
                    backgroundColor="#1488B7"
                    _hover={{ bg: '#76A117' }}
                    _active={{
                      bg: '#76A117',
                      transform: 'scale(0.99)',
                    }}
                    onClick={() => handleClick()}
                  >
                    Entrar em contato agora!
                  </Button>
                </Box>
              </Box>
            </Box>
            <Flex justifyContent="end" w={{ base: '100%', lg: '50%' }}>
              <Flex
                w={{ base: '100%', lg: '95%' }}
                py={['20px', '20px', '0px']}
                position="relative"
                overflow="hidden"
              >
                {images.map((image, index) => (
                  <Image
                    key={index}
                    h={['100%', '100%', '450px']}
                    w="100%"
                    objectFit="cover"
                    src={image}
                    borderRadius="15px"
                    opacity={currentIndex === index ? 1 : 0}
                    transition="opacity 0.5s"
                    position={currentIndex === index ? 'static' : 'absolute'}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Center>
          <Box onClick={scrollToSectionB} py="40px" cursor="pointer">
            <Icon width="50" color="#1488B7" icon="ep:arrow-down" />
          </Box>
        </Center>
        <Box bg="#FFF" id="sectionB">
          <Box maxW="1200px" mx="auto">
            <Center>
              <Text fontSize="40px" fontWeight="700">
                Nossos serviços
              </Text>
            </Center>
            <SimpleGrid pt="20px" columns={[2, 4]} gap={5}>
              {products.map((item, idx) => (
                <Box
                  boxShadow="xl"
                  p="6"
                  rounded="md"
                  bg="white"
                  borderRadius="5px"
                  key={idx}
                >
                  <Box>
                    <Icon width="50" color="#76A117" icon={item.icon} />
                  </Box>
                  <Text
                    py="10px"
                    color="#76A117"
                    fontSize="18px"
                    fontWeight="700"
                  >
                    {item.title}
                  </Text>
                  <Text color="#9191A6" fontSize="16px" fontWeight="400">
                    {item.subTitle}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Flex mt="40px" bg="#1488B7" py="20px" id="sectionC">
          <Flex
            py={['40px', '40px', '30px']}
            px={['20px', '20px', '0px']}
            maxW="1200px"
            mx="auto"
          >
            <Flex justify="flex-end" gap={5}>
              <Flex w="40%">
                <Box>
                  <Image
                    w="100%"
                    h="100%"
                    objectFit="fill"
                    src="/assets/Imagequemsomos.jpg"
                    borderRadius="15px"
                    transition="opacity 0.5s"
                  />
                </Box>
              </Flex>
              <Box w="60%">
                <Text
                  fontSize="40px"
                  textAlign="center"
                  color="#F3F3F3"
                  fontWeight="700"
                >
                  Quem Somos
                </Text>
                <Text
                  color="#F3F3F3"
                  pt="30px"
                  fontSize="18px"
                  fontWeight="400"
                >
                  Nossa equipe altamente capacitada, liderada pelos sócios
                  Marcus Vinicius Wixak e Cláudia Palomino, atua no segmento de
                  comércio e prestação de serviços em refrigeração{' '}
                  <strong>há mais de 20 anos.</strong> Com o objetivo principal
                  de oferecer soluções completas para ambientes climatizados.
                </Text>
                <Text
                  pt="20px"
                  color="#F3F3F3"
                  fontSize="18px"
                  fontWeight="400"
                >
                  Desde a concepção do projeto até a instalação, manutenção e
                  reparos, a Totaltech Climatização se destaca por seu
                  <strong> atendimento personalizado</strong>. Nossa equipe está
                  preparada para compreender as necessidades individuais de cada
                  cliente e desenvolver soluções customizadas, sempre buscando
                  superar as expectativas.
                </Text>
                <Text
                  pt="20px"
                  color="#F3F3F3"
                  fontSize="18px"
                  fontWeight="400"
                >
                  Além disso, estabelecemos parcerias com os principais
                  fabricantes de sistemas de refrigeração, o que nos permite
                  apresentar as melhores soluções disponíveis no mercado. Nosso
                  foco está em tornar os ambientes produtivos, como escritórios,
                  áreas de produção, restaurantes, hotéis e outros, assim como
                  os ambientes residenciais, locais agradáveis e saudáveis para
                  todos que os utilizam.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box mt="40px" bg="#fff" maxW="1200px" mx="auto" id="sectionD">
        <Center>
          <Text fontSize="40px" fontWeight="700">
            Nossa Filosofia
          </Text>
        </Center>
        <Box py={20}>
          <Container maxW="container.lg">
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
              <MotionBox
                borderRadius="lg"
                borderColor="#76A117"
                p={6}
                bg="#76A117"
                whileHover={{ scale: 1.05, bg: 'teal.100' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FiTarget size={40} color="#FFF" />
                <Heading
                  fontSize="18px"
                  fontWeight="700"
                  color="#FFF"
                  mt={4}
                  mb={2}
                >
                  Missão
                </Heading>
                <Text color="#FFF" fontSize="16px" fontWeight="400">
                  Ofertar aos nossos clientes soluções adequadas e customizadas
                  às suas necessidades, através de alternativas sustentáveis e
                  eficientes, dentro do segmento de refrigeração e qualidade do
                  ar.
                </Text>
              </MotionBox>
              <MotionBox
                borderRadius="lg"
                borderColor="#76A117"
                p={6}
                bg="#76A117"
                whileHover={{ scale: 1.05, bg: 'teal.100' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FiEye size={40} color="#FFF" />
                <Heading
                  fontSize="18px"
                  fontWeight="700"
                  color="#FFF"
                  mt={4}
                  mb={2}
                >
                  Visão
                </Heading>
                <Text color="#FFF" fontSize="16px" fontWeight="400">
                  Ser reconhecida como uma empresa de excelência no mercado
                  brasileiro e internacional, por meio de nossa expressiva
                  atuação e constante especialização, proporcionando aos nossos
                  clientes ambientes e processos mais eficientes do ponto de
                  vista energético, agradáveis do ponto de vista climático e
                  estético e saudáveis, considerando o foco na qualidade do ar.
                </Text>
              </MotionBox>
              <MotionBox
                borderRadius="lg"
                borderColor="#76A117"
                p={6}
                bg="#76A117"
                whileHover={{ scale: 1.05, bg: 'teal.100' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FiHeart size={40} color="#FFF" />
                <Heading
                  fontSize="18px"
                  fontWeight="700"
                  color="#FFF"
                  mt={4}
                  mb={2}
                >
                  Valores
                </Heading>
                <VStack align="start" spacing={2}>
                  <Text color="#FFF" fontSize="16px" fontWeight="400">
                    Servir e buscar sistematicamente a satisfação de nossos
                    clientes.
                  </Text>
                  <Text color="#FFF" fontSize="16px" fontWeight="400">
                    Comprometidos com a capacitação constante de nossa equipe,
                    tanto tecnicamente como na compreensão e propagação dos
                    valores éticos e humanitários.
                  </Text>
                </VStack>
              </MotionBox>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box mt="40px" pb="20px" bg="#76A117" id="sectionE">
        <Box maxW="1200px" mx="auto">
          <Center py="20px">
            <Text fontSize="40px" color="#FFF" fontWeight="700">
              Nossos Clientes
            </Text>
          </Center>
          <Box>
            <SimpleGrid columns={4} gap={5}>
              <Center>
                <Image
                  objectFit="fill"
                  src="/assets/julieta-de-serpa.png"
                  borderRadius="15px"
                  transition="opacity 0.5s"
                />
              </Center>
              <Center>
                <Image
                  objectFit="fill"
                  src="/assets/fundicao-progressopng.png"
                  borderRadius="15px"
                  transition="opacity 0.5s"
                />
              </Center>
              <Center>
                <Image
                  objectFit="fill"
                  src="/assets/julieta-de-serpa.png"
                  borderRadius="15px"
                  transition="opacity 0.5s"
                />
              </Center>
              <Center>
                <Image
                  objectFit="fill"
                  src="/assets/fundicao-progressopng.png"
                  borderRadius="15px"
                  transition="opacity 0.5s"
                />
              </Center>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>

      <Box pb="20px" bg="#F3F3F3" id="sectionF">
        <Box pt="40px" maxW="1200px" mx="auto">
          <Center py="30px">
            <Text fontSize="40px" fontWeight="700">
              Preencha o formulário e entraremos em contato!
            </Text>
          </Center>
          <Flex pb="50px" justify="space-between">
            <Box w="45%" bg="#FFF" borderRadius="10px" py="30px" px="30px">
              <Text
                fontSize="24px"
                fontFamily="Roboto, Arial, sans-serif"
                fontWeight="700"
                color="##262C3D"
              >
                Um de nossos consultores entrará em contato o mais breve
                possível!
              </Text>
              <Text fontWeight="600" fontSize="14px" py="10px">
                Preencha seus dados para começar
              </Text>
              <Box
                as="form"
                action="https://formsubmit.co/mrochadias1995@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3002/"
                />
                <Box>
                  <Input field="Nome Completo*" placeholder="Joao da Silva" />
                </Box>
                <Box pt="10px">
                  <Input field="CPF*" placeholder="000.000.000-00" />
                </Box>
                <Box pt="10px">
                  <Input field="Telefone*" placeholder="(99) 9 9999-9999" />
                </Box>
                <Box pt="10px">
                  <Input
                    field="Produto interessado*"
                    placeholder="Manutenção Preditiva"
                  />
                </Box>

                <Box pt="40px">
                  <Button
                    w="full"
                    h="50px"
                    fontWeight="700"
                    fontSize="22px"
                    borderRadius="15px"
                    color="#FFF"
                    type="submit"
                    backgroundColor="#1488B7"
                    _hover={{ bg: '#76A117' }}
                    _active={{
                      bg: '#76A117',
                      transform: 'scale(0.99)',
                    }}
                  >
                    Enviar!
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box w="50%">
              <Flex w="100%" h="100%" objectFit="fill">
                <Image
                  objectFit="fill"
                  src="/assets/image6.jpg"
                  borderRadius="15px"
                  transition="opacity 0.5s"
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box bg="#121212" py="30px" w="100%">
        <SimpleGrid maxW="1200px" mx="auto" columns={[1, 1, 3]}>
          <Text
            fontWeight="400"
            fontSize="14px"
            color="#B0B0B0"
            textAlign={['center', 'center', 'left']}
            py={['5px', '5px', '0px']}
          >
            2023 TotalTech Climatização
            <br /> Todos os direitos reservados. CNPJ: nº
          </Text>
          <Center flexDir={['column', 'column', 'row']}>
            <Text
              fontFamily="aktiv-grotesk, sans-serif"
              fontWeight="700"
              fontSize="14px"
              color="#FFF"
              textAlign="center"
            >
              Atendimento:
            </Text>
            <Text
              ml="20px"
              fontWeight="400"
              fontSize="14px"
              color="#B0B0B0"
              textAlign={['center', 'center', 'left']}
              py={['5px', '5px', '0px']}
            >
              contato@totaltech.com (21) 99119-7332
            </Text>
          </Center>
          <Center gap={5}>
            <Text fontWeight="700" fontSize="14px" color="#FFF">
              Siga nosso Instagram
            </Text>
            <Flex gap={2}>
              {/* <Center w="25px">
                <Image
                  cursor="pointer"
                  src="/icons/icon_facebook.png"
                  objectFit="cover"
                />
              </Center> */}
              <Box color="#FFF" cursor="pointer">
                <Icon width="30px" icon="bi:instagram" />
              </Box>
            </Flex>
          </Center>
        </SimpleGrid>
        <WrapItem display={['none', 'none', 'grid']}>
          <Center
            position="fixed"
            backgroundColor="#25d366"
            bottom={['50px', '50px', '100px']}
            borderRadius="90px"
            p={['4px', '4px', '10px']}
            right={['30px', '30px', '100px']}
            cursor="pointer"
            w={['45px', '45px', '50px']}
            onClick={() =>
              window.open('https://api.whatsapp.com/send?phone=5521991197332')
            }
          >
            <Icon icon="ic:outline-whatsapp" color=" #FFF" width="30px" />
          </Center>
        </WrapItem>
      </Box>
    </Layout>
  );
}
