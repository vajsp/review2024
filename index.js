function myRace(pList) {
    const p1 = new Promise((resolved, rejected) => {
        let off = false;
        pList.forEach((p) => {
            p.then((data) => {
                if (!off) {
                    resolved(data);
                    off = true;
                }
            });
        });
    });

    return p1;
}
