import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from 'react-router-dom'
import './SocialMedia.scss'

type Props = {}

const SocialMedia = (props: Props) => {
    return (
        <div className="social-media-icons flex">
            <Link to="/" title="Instagram">
                <InstagramIcon />
            </Link>
            <Link to="/" title="Facebook">
                <FacebookIcon />
            </Link>
            <Link to="/" title="Telegram">
                <TelegramIcon />
            </Link>
            <Link to="/" title="YouTube">
                <YouTubeIcon />
            </Link>
        </div>
    )
}

export default SocialMedia
