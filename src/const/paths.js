// Components
import Name from '../components/steps/name/Name';
import Email from '../components/steps/email/Email';
import Address from '../components/steps/address/Address';
import Floors from '../components/steps/floors/Floors';
import Perks from '../components/steps/perks/Perks';
import Parking from '../components/steps/parking/Parking';
import Uploadimg from '../components/steps/uploadimg/Uploadimg';
import Price from '../components/steps/price/Price';
import Elevator from '../components/steps/elevator/Elevator';
import Resumen from '../components/steps/resumen/Resumen';
//icons
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
export const Paths = [

    {
        path: "/datos-cliente",
        component: Name,
        name: "Datos del cliente",
        nameState: "names",
        code: "Paso 1",
        descripcion: "Agrege su nombre completo en el siguiente campo, Ej: Peter Gregory.",
        icon: PersonOutlinedIcon,
        next: "/email",
        prev: null
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
        prev: "/datos-cliente"
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
        prev: "/email"
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
        prev: "/direccion-predio"

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
        prev: "/numero-piso"
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
        prev: "/beneficios"
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
        prev: "/parqueadero"
    }, {
        path: "/subir-foto",
        component: Uploadimg,
        name: "Monto de venta",
        code: "Paso 8",
        nameState: "price",
        visible: true,
        descripcion: "Por favor suba una foto de su predio",
        icon: CloudUploadOutlinedIcon,
        next: "/ascensor",
        prev: "/monto-venta"
    }, {
        path: "/ascensor",
        component: Elevator,
        name: "Ascensor",
        code: "Paso 9",
        nameState: "price",
        visible: true,
        descripcion: "Su predio posee ascensor?",
        icon: CloudUploadOutlinedIcon,
        next: "/resumen",
        prev: "/monto-venta"
    },
    {
        path: "/resumen",
        component: Resumen,
        name: "Resumen",
        code: "Paso 10",
        nameState: "resumen",
        visible: true,
        descripcion: "Muchas gracias por brindarnos tu información, nos estaremos comunicando contigo para agendar una reunion y poder seguir con el proceso",
        icon: CloudUploadOutlinedIcon,
        next: null,
        prev: "/monto-venta"
    },

]