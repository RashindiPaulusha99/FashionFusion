import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import notFoundPage from '../assets/images/404page.png';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function NotFoundIndex() {
    return (
        <>
            <div>
                <title> 404 Page Not Found </title>
            </div>

            <Container>
                <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" paragraph>
                        Sorry, page not found!
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
                        spelling.
                    </Typography>

                    <img src={notFoundPage} alt='page not found'/>

                    <Button to="/login" size="large" className='mt-5' variant="contained" component={RouterLink}>
                        Go to Home
                    </Button>
                </StyledContent>
            </Container>
        </>
    );
}
