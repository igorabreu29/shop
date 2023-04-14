import { styled } from "..";

export const HomeContainer = styled("main", {
    display: 'flex',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    width: '100%',
    marginLeft: 'auto',
    minHeight: 656,
})

export const Product = styled("div", {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '1.5rem 1rem',

        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        background: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition:'all 0.2s ease',

        div: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            gap: '0.5rem',
        },

        strong: {
            fontSize: '$md',
            color: '$gray100',
        }, 

        span: {
            fontSize: '$lg',
            fontWeight: 'bold',
            color: '$green300',
        }, 
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})

export const ButtonContent = styled('button', {
    background: '$green500',
    padding: '0.6rem ',
    borderRadius: 8,
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
})