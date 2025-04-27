import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Modal, Offcanvas } from 'bootstrap';
@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  homeDivId: string = '';
  private modals: Map<string, Modal> = new Map();
  private offcanvas: Map<string, Offcanvas> = new Map();
  constructor() { }

  private divIdSource = new BehaviorSubject<string | null>(null);
  currentDivId = this.divIdSource.asObservable();

  // Method to update the ID
  setDivId(id: string) {
    this.divIdSource.next(id);
  }


  // Method to open a specific modal by its ID
  public openModal(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement && !this.modals.has(modalId)) {
      const modalInstance = new Modal(modalElement);
      this.modals.set(modalId, modalInstance);
    }
    this.modals.get(modalId)?.show();
  }

  // Method to close a specific modal by its ID
  public closeModal(modalId: string) {
    const modalInstance = this.modals.get(modalId);
    if (modalInstance) {
      modalInstance.hide();
      this.modals.delete(modalId); // Remove the instance if no longer needed
    }
  }


  // Method to open a specific modal by its ID
  public openOffcanvas(canvasId: string) {
    const canvasElement = document.getElementById(canvasId);
    if (canvasElement && !this.offcanvas.has(canvasId)) {
      const canvasInstance = new Offcanvas(canvasElement);
      this.offcanvas.set(canvasId, canvasInstance);
    }
    this.offcanvas.get(canvasId)?.show();
  }

  // Method to close a specific modal by its ID
  public closeOffcanvas(canvasId: string) {
    const canvasInstance = this.offcanvas.get(canvasId);
    if (canvasInstance) {
      canvasInstance.hide();
      this.offcanvas.delete(canvasId); // Remove the instance if no longer needed
    }
  }

}
