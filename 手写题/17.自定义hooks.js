function useGetPoint() {
    const [X, setX] = useState(null);
    const [Y, setY] = useState(null);

    useEeffect(() => {
        const fn = (event) => {
            const x = event.clientX;
            const y = event.clientY;

            setX(x);
            setY(y);
        };

        document.addEventListener('click', fn);

        return () => {
            document.removeEventListener('click', fn);
        };
    }, []);
}
