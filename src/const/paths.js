// Components
import Beginning from '../components/steps/beginning/Beginning';
import Name from '../components/steps/name/Name';
import Email from '../components/steps/email/Email';
import Address from '../components/steps/address/Address';
import Floors from '../components/steps/floors/Floors';
import Perks from '../components/steps/perks/Perks';
import Parking from '../components/steps/parking/Parking';
import Uploadimg from '../components/steps/uploadimg/Uploadimg';
import Price from '../components/steps/price/Price';
import Elevator from '../components/steps/elevator/Elevator';
import Final from '../components/steps/resumen/Final';
//icons
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ElevatorOutlinedIcon from '@mui/icons-material/ElevatorOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';



export const Paths = [
    {
        path: "/",
        component: Beginning,
        name: "Terminos y condiciones",
        nameState: "beginning",
        code: "",
        descripcion: "Acontinuación encontrarás un formulario el cual llenaras con tus datos y los del predio, para continuar con el proceso debe aceptar los terminos y condiciones en el tratamiento de datos  ",
        icon: AssignmentTurnedInOutlinedIcon,
        next: "/datos-cliente",
        prev: null,
        porcentageProgress:0
    },
    {
        path: "/datos-cliente",
        component: Name,
        name: "Datos del cliente",
        nameState: "name",
        code: "Paso 1",
        descripcion: "Agrege su nombre completo en el siguiente campo, Ej: Peter Gregory.",
        icon: PersonOutlinedIcon,
        next: "/email",
        prev: null,
        porcentageProgress:10

    },
    {
        path: "/email",
        component: Email,
        name: "Correo electrónico",
        nameState: "email",
        code: "Paso 2",
        descripcion: "Agrege su correo electrónico en el siguiente campo, Ej: ejemplo@correo.com",
        icon: AlternateEmailOutlinedIcon,
        next: "/direccion-predio",
        prev: "/datos-cliente",
        porcentageProgress:20

    },
    {
        path: "/direccion-predio",
        component: Address,
        name: "Dirección del predio",
        code: "Paso 3",
        nameState: "address",
        visible: true,
        descripcion: "Agrege su dirrecion completa en el siguiente campo , Ej: Calle falsa #12 -3, Apto 1209",
        icon: LocationOnOutlinedIcon,
        next: "/numero-piso",
        prev: "/email",
        porcentageProgress:30

    },
    {
        path: "/numero-piso",
        component: Floors,
        name: "Número del piso",
        code: "Paso 4",
        nameState: "floor",
        visible: true,
        descripcion: "Defina el número del piso en la que se encuentra el predio, Ej: Piso 12, (Nota: El máximo número del piso está limitado a 50)",
        icon: ApartmentOutlinedIcon,
        next: "/beneficios",
        prev: "/direccion-predio",
        porcentageProgress:40


    },
    {
        path: "/beneficios",
        component: Perks,
        name: "Beneficios",
        code: "Paso 5",
        nameState: "perks",
        visible: true,
        descripcion: "Agrege los beneficios con los que cuenta el predio, Ej: Zona BBQ, Sálon comunal, Parques de juegos.",
        icon: DomainAddOutlinedIcon,
        next: "/parqueadero",
        prev: "/numero-piso", 
        porcentageProgress:50

    },
    {
        path: "/parqueadero",
        component: Parking,
        name: "Parqueadero",
        code: "Paso 6",
        nameState: "parking",
        visible: true,
        descripcion: "Su predio posee parqueadero?",
        icon: LocalParkingIcon,
        next: "/monto-venta",
        prev: "/beneficios",
        porcentageProgress:60

    }, {
        path: "/monto-venta",
        component: Price,
        name: "Monto de venta",
        code: "Paso 7",
        nameState: "price",
        visible: true,
        descripcion: "Por favor ingrese el monto de venta de su predio",
        icon: LocalAtmOutlinedIcon,
        next: "/subir-foto",
        prev: "/parqueadero",
        porcentageProgress:70
    }, {
        path: "/subir-foto",
        component: Uploadimg,
        name: "Foto del predio",
        code: "Paso 8",
        nameState: "img",
        visible: true,
        descripcion: "Por favor suba una foto de su predio",
        icon: CloudUploadOutlinedIcon,
        next: "/ascensor",
        prev: "/monto-venta",
        porcentageProgress:80

    }, {
        path: "/ascensor",
        component: Elevator,
        name: "Ascensor",
        code: "Paso 9",
        nameState: "elevator",
        visible: true,
        descripcion: "Su predio posee ascensor?",
        icon: ElevatorOutlinedIcon,
        next: "/resumen",
        prev: "/monto-venta",
        porcentageProgress:90

    },
    {
        path: "/resumen",
        component: Final,
        name: "Resumen",
        code: "",
        nameState: "resumen",
        visible: true,
        descripcion: "Muchas gracias por brindarnos tu información, nos estaremos comunicando contigo para agendar una reunion y poder seguir con el proceso, estos fueron los datos diligenciados: ",
        icon: DescriptionOutlinedIcon,
        next: { pathname: "/", fromSales: true },
        prev: "/monto-venta",
        porcentageProgress:100
    },

]