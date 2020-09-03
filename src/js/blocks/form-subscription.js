/** form-subscription.js **/
import $ from 'jquery';

function formSubscription() {
    const $formSubscription = $('[data-form="subscription"]');
    const classErrorField = 'subscription__filed_error';
    const classError = 'subscription__message_error';
    const classSuccess = 'subscription__message_success';

    $formSubscription.on('submit', function(e) {
        const $form = $(this);
        const $fieldEmail = $form.find('[name="email"]');
        const email = $fieldEmail.val().trim();
        const pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        const $fieldMessage = $form.find('[data-message]');

        if (pattern.test(email)) {
            $fieldMessage.addClass(classSuccess);
            $fieldMessage.text('Ваша подписка успешно подтверждена');
            $fieldMessage[0].hidden = false;
        } else {
            $fieldEmail.addClass(classErrorField);
            $fieldMessage.addClass(classError);
            $fieldMessage.text('Вы ввели некорректный Email');
            $fieldMessage[0].hidden = false;
        }

        e.preventDefault();
    });

    $formSubscription.on('focus', 'input', function(e) {
        const $form = $(this).parents('form');
        const $fieldEmail = $form.find('[name="email"]');
        const $fieldMessage = $form.find('[data-message]');

        $fieldEmail.removeClass(classErrorField);
        $fieldMessage.removeClass(classError).removeClass(classSuccess);
        $fieldMessage.empty();
        $fieldMessage[0].hidden = true;

        e.preventDefault();
    });
}

export default formSubscription;
