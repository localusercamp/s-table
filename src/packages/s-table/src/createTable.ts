interface Config {
    data: any[];
    columns: { renderer: (ctx: { td: HTMLTableCellElement, item: any }) => void }[];
}



function renderTable(el: HTMLElement, config: Config) {
    const table = document.createElement('table');
    table.style.position = 'relative';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const input = document.createElement('input');
    input.style.position = 'absolute';

    table.appendChild(input);
    
    const { data, columns } = config;

    for (const item of data) {
        const tr = document.createElement('tr');

        for (const column of columns) {
            const td = document.createElement('td');

            column.renderer({ td, item });

            td.addEventListener('dblclick', (e) => {
                console.log({t:e.target});
                input.style.top = `${e?.target?.offsetTop}px`;
                input.style.left = `${e?.target?.offsetLeft}px`;
                input.style.height = `${e?.target?.clientHeight}px`;
                input.style.width = `${e?.target?.clientWidth}px`;
            });

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    el.appendChild(table);
}

function createTable(id: string, config: Config) {
    const el = document.getElementById(id);
    
    if (!el) {
        throw new Error('el is undefined!');
    }

    renderTable(el, config);
}



export {
    createTable,
};
