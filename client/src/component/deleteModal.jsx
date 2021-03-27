import React, { Component } from 'react';
export default class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('render delte taskmodule....');
        const { name, id, onConfirm, onCancelDelete } = this.props;
        return (
            <div class="modal" tabindex="-1" id="deleteTaskModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Confirmation Required</h5>
                            <i class="bi bi-x" onClick={() => onCancelDelete()}></i>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete {name} task?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => onCancelDelete()}>Cancel</button>
                            <button type="button" class="btn btn-danger" onClick={() => onConfirm(id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}