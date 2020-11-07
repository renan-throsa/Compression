class MapView extends View<Object> {

    constructor(seletor: string) {
        super(seletor);
    }

    template(model: Object): string {
        return `        
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Chave</th>                        
                        <th>Valor</th>                        
                    </tr>
                </thead>
        
                <tbody>
                ${Object.entries(model).map(([key, value]) => {
            return `                <tr>
                            
                        <td>${key}</td>
                        <td>${value}</td>
                        
                    </tr>
                `
        }).join('')}
                </tbody>
        
                <tfoot>
                </tfoot>
            </table>`;
    }
}