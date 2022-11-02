import { BsShieldFillCheck } from 'react-icons/bs';
import { RiHeart2Fill } from 'react-icons/ri';
import { BiSearchAlt } from 'react-icons/bi';
import abi from './Transactions.json'

export const contractABI = abi.abi;

export const contractAddress = '0xcf48CD062D09A002dcCb670E01beb4E99cF80884'

export const serviceInfo = [
    {
        color: 'bg-[#2952E3]',
        icon: BsShieldFillCheck,
        title: 'Security gurantee',
        subtitle: 'Security is guranteed. We always maintain privacy and maintain the quality of our products',
    },
    {
        color: 'bg-[#8945F8]',
        icon: BiSearchAlt,
        title: 'Best exchange rates',
        subtitle: 'Security is guranteed. We always maintain privacy and maintain the quality of our products',
    },
    {
        color: 'bg-[#F84550]',
        icon: RiHeart2Fill,
        title: 'Fastest transactions',
        subtitle: 'Security is guranteed. We always maintain privacy and maintain the quality of our products',
    },
]
// NP6JUL9eERUkveyV3KBfSXsTwmoKlh2G8