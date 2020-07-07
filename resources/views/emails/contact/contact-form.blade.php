@component('mail::message')
# Web stranica studij informatike

<strong>Ime: </strong>{{ $data['name'] }}<br />
<strong>Email: </strong>{{ $data['email'] }}<br />
<strong>Adresa: </strong>{{ $data['home_address'] }}<br />
<strong>Broj mobitela: </strong>{{ $data['phone_number'] }}


<strong>Upit: </strong>{{ $data['message'] }}
@endcomponent
