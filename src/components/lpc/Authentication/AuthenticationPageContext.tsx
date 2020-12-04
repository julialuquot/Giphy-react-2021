import React, { ReactElement, useState } from 'react';
enum pages {
    login = 1,
    signup = 2,
    lostPassword = 3,
    emailSentConfirmation = 4,
    newPassword = 5,
    loginConfirmation = 6,
}
const Context = React.createContext({ pages: pages, page: pages.login, setPage: null, email: '', setEmail: null });
const Consumer = Context.Consumer;
type ProviderProps = {
    children: ReactElement;
};
const Provider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
    const [page, setPage] = useState(pages.login);
    const [email, setEmail] = useState('');

    return <Context.Provider value={{ page, setPage, pages, email, setEmail }}>{children}</Context.Provider>;
};
export default { Provider, Consumer };
