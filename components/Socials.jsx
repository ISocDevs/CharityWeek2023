import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Socials = () => {
    const iconSize = 60
    return (
        <div className='flex flex-center gap-60 bg-red-500'>
            <div className="social-icon" style={{ "--bg": "red" }}>
                <InstagramIcon sx={{ fontSize: iconSize }} />
            </div>
            <div className="social-icon" style={{ "--bg": "blue" }}>
                <FacebookIcon sx={{ fontSize: iconSize }} />
            </div>
            <div className="social-icon" style={{ "--bg": "black" }}>
                <TwitterIcon sx={{ fontSize: iconSize }} />
            </div>
        </div>
    )
}

export default Socials