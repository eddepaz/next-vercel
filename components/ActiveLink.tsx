import { CSSProperties, FC } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

const style: CSSProperties = {
    color: '#0070F3',
    textDecoration: 'underline'
}


interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();
    // console.log(asPath);

    return (
        <Link href={href} style={asPath === href ? style : undefined}>
            {text}
        </Link>
    )
}
