class MapView extends View {
    constructor(seletor) {
        super(seletor);
    }
    template(model) {
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
                `;
        }).join('')}
                </tbody>
        
                <tfoot>
                </tfoot>
            </table>`;
    }
}
