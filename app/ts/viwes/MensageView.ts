class MensageView extends View<Mensage> {

    template(model: Mensage): string {
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>';
    }
}