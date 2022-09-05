import { DetailsModal } from "../components/component-details-modal";

class PasswordModal extends DetailsModal {
  constructor() {
    super();

    if (this.querySelector('input[aria-invalid="true"]')) this.open({target: this.querySelector('details')});
  }
}

customElements.define('password-modal', PasswordModal);
