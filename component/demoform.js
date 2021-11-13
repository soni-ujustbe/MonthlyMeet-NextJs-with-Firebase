import React from 'react'
import styles from 'Home.module.css' 

function Form() {
    return (
        <div>
        <div class="topSection">
    <h6 class="sectionContent">Monthly Networking Meet

    </h6>

</div>

<div class="row">
    <div class="col m3"></div>
    <div class="col m6">
        <div class="card">
            <div class="card-content">
                <div class="card-title">Monthly Networking Meet</div>
                <p>(If there is no response put NA)</p>
                <div>

                    <span class="red-text">
                        Required *
                    </span>
                    <div class="row">
                        <form>

                            <div class="input-field">
                                <div>
                                    <label class="labelText" for="fullName">Enter Your Full Name (अपना पूरा नाम लिखे)
                                        *</label>
                                    <input type="text" id="fullName" class="validate" formControlName="fullName"
                                        name="fullName" required />

                                </div>
                                <div *ngIf="ourForm.get('fullName').hasError('required') && displayError">
                                    <span class="helper-text">This is required question</span>
                                </div>

                            </div>

                            <div class="input-field">
                                <div>
                                    <label class="labelText" for="couponCode">Enter your Coupon Code(अपना कूपन कोड दर्ज
                                        करें)</label>
                                    <input type="text" id="couponCode" class="validate" formControlName="couponCode"
                                        name="couponCode" required />

                                </div>
                                <div *ngIf="ourForm.get('couponCode').hasError('required') && displayError">
                                    <span class="helper-text">This is required question</span>
                                </div>

                            </div>

                            <div class="input-field">
                                <div>
                                    <label class="labelText" for="listedPartner">Any Listed Partner you would like to
                                        Pass a Referral?(कोई भी सूचीबद्ध साथी जिसे आप रेफरल पास करना चाहते हैं?)
                                        *</label>
                                    <input type="text" id="listedPartner" class="validate"
                                        formControlName="listedPartner" name="listedPartner" required />

                                </div>
                                <div
                                    *ngIf="ourForm.get('listedPartner').hasError('required') && displayError">
                                    <span class="helper-text">This is required question</span>
                                </div>

                            </div>

                            <div class="radioButton">
                                <label class="radioButton">choose any one*</label>
                                <br>
                                <p>
                                    <label>
                                        <input name="yn" type="radio" (click)="radioChanged('Yes')" id="Yes"
                                            formControlName="yn" value="Yes" required />
                                        <span>Yes</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="yn" type="radio" (click)="radioChanged('No')" id="No"
                                            formControlName="yn" value="No" required />
                                        <span>No</span>
                                    </label>
                                </p>
                                <div>
                                    <span class="helper-text">This is required question</span>
                                </div>
                            </div>


                            
                            <div class="checkBox-Btn">
                                <label class="checkBoxButton" >check me*</label>
                                <br>
                                <p>
                                <div>
                                    <label>
                                        <input type="checkbox" name="checkboxdata" class="checkBox-input"
                                            [value]="data.value" (change)="onCheckBoxChange($event)" required />
                                        <span>{{data.name}}</span>
                                    </label>
                                </div>

                            </div>
                            <!-- <p class="error" *ngIf="this.meetingForm.controls['checkArray'].errors?.required">
                                Checkbox is required, select atleast one value.
                            </p> -->

                            <div class="input-field">
                                <div>
                                    <label class="labelText" for="otoMeeting">From today's meeting, which Partner/Listed
                                        Partners you would like to connect to know more about them (One to One Meeting)?
                                        (आज की बैठक से, आप किस भागीदार / सूचीबद्ध भागीदार के बारे में अधिक जानने के लिए
                                        उनसे (वन टू वन मीटिंग) जुड़ना चाहेंगे? *</label>
                                    <input type="text" id="otoMeeting" class="validate" formControlName="otoMeeting"
                                        name="otoMeeting" />

                                </div>
                                <div *ngIf="ourForm.get('otoMeeting').hasError('required') && displayError">
                                    <span class="helper-text">This is required question</span>
                                </div>

                            </div>



                            <div class="progress" *ngIf="submitting">
                                <div class="indeterminate"></div>
                            </div>
                            <div>
                                <input type="submit" value="Submit" class="btn" />

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <ng-template #showSubmitted>
            <p class="green-text">Thanks you for submitting your form, We wish you all the best.</p>
        </ng-template>

    </div>
    <div class="col m3"></div>
            
        </div>
    )
}

export default Form
