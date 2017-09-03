<aura:application extends="force:slds">

    <aura:attribute name="address" type="String" default="1 Market St, San Francisco, CA 94105, USA" />
    <aura:attribute name="apikey" type="String" />
    <c:XMLHttpRequest address="{!v.address}" apikey="{!v.apikey}"/>

</aura:application>