import os
from django.conf import settings
from django.conf.urls.defaults import *
from django.contrib import admin
from django.contrib.comments.forms import CommentForm

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Example:
    # (r'^blender/', include('blender.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    (r'^admin/(.*)', admin.site.root),
    
    # Form Validate
    url(r'^validate/comment/$', 'ajax_validation.views.validate', {'form_class': CommentForm, 'callback': lambda request, *args, **kwargs: {'target_object': ContentType.objects.get_for_model(Flatpages)}}, name="comment_form_validate"),
    
    # For comments
    (r'^comments/', include('django.contrib.comments.urls')),
)

if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^media/(.*)$', 'django.views.static.serve', {'document_root': os.path.join(settings.PROJECT_PATH, 'media')})
    )